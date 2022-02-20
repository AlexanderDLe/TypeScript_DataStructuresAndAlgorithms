/**
 * AlgoExpert
 * 
      ''     Z     X      Y      Z         W     
  '' [ [] | []  | []  |  []  | []    | []     ]
   X [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   K [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   Y [ [] | []  | [X] | [XY] | [XY]  | [XY]   ]
   Z [ [] | [Z] | [X] | [XY] | [XYZ] | [XYZ]  ]
   W [ [] | [Z] | [X] | [XY] | [XYZ] | [XYZW] ]

                            (swapped Z & W here)
      ''     Z     X      Y      W         Z     
  '' [ [] | []  | []  |  []  | []    | []     ]
   X [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   K [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   Y [ [] | []  | [X] | [XY] | [XY]  | [XY]   ]
   Z [ [] | [Z] | [X] | [XY] | [XY]  | [XYZ]  ]
   W [ [] | [Z] | [X] | [XY] | [XYW] | [XYZ]  ]

                            (replace Z w/ W here)
      ''     Z     X      Y      W         W     
  '' [ [] | []  | []  |  []  | []    | []     ]
   X [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   K [ [] | []  | [X] |  [X] | [X]   | [X]    ]
   Y [ [] | []  | [X] | [XY] | [XY]  | [XY]   ]
   Z [ [] | [Z] | [X] | [XY] | [XY]  | [XY]   ]
   W [ [] | [Z] | [X] | [XY] | [XYW] | [XYW]  ] 
   W [ [] | [Z] | [X] | [XY] | [XYW] | [XYWW] ]
 
      ''     8     1      2   
  '' [ [] | []  | []  | []    ]
   8 [ [] | [8] | [8] | [8]   ]
   2 [ [] | [8] | [8] | [82]  ] <---  2 is already placed here.
   2 [ [] | [8] | [8] | [822] ] <---  Need to prevent duplicate. How? Take the diagonal.
   2 [ [] | []  | []  | []    ]       
   2 [ [] | []  | []  | []    ]       But what does the diagonal mean? 
                                      It is the value UP UNTIL the current compare

  If the chars match, then don't take left/top because those represent values that have ALREADY used those chars.

 */

import { PrintMatrix } from "../utils/Utilities";

const longestCommonSubsequence = (str1: string, str2: string): string[] => {
  let DP = new Array(str2.length + 1).fill(0);
  DP = DP.map(item => new Array(str1.length + 1).fill([]));

  let max: string[] = [];
  for (let row = 1; row < DP.length; row++) {
    for (let col = 1; col < DP[0].length; col++) {
      if (str2[row - 1] === str1[col - 1]) {
        DP[row][col] = [...DP[row - 1][col - 1]];
        DP[row][col].push(str2[row - 1]);
      } else {
        let left = DP[row][ col - 1];
        let top = DP[row - 1][col];
        DP[row][col] = left.length > top.length ? [...left] : [...top];
      }
      if (DP[row][col].length > max.length) max = DP[row][col];
    }
  }

  // console.log(DP)

  return max;
}

export default () => {
    const str1 = "8111111111111111142";
    const str2 = "222222222822222222222222222222433333333332";
    console.log(longestCommonSubsequence(str1, str2));
};
