/**
 * 721. Accounts Merge
 */

const mergeAccountsRef = (accounts: string[][]): string[][] => {
  const parents:any = {};
  const email2Name:any = {};

  const find = (x:string) => {
    console.log('find     ', x, parents[x]);
    if (x !== parents[x]) {
      console.log('find rep')
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }

  const union = (x:string, y:string) => {
    console.log('union    ', x, y)
    parents[find(x)] = find(y);
  }

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) parents[email] = email;
      console.log('----');
      console.log('set email', parents[email], email);
      email2Name[email] = name;
      union(email, emails[0]);
      console.log(parents);
    }
  }
  
  const emails:any = {};
  for (const email of Object.keys(parents)) {
    console.log('----');
    const parent = find(email);
    console.log('parent   ', parent);
    if (parent in emails) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
    console.log(emails);
  }

  return Object.entries(emails).map(([email, x]) => [email2Name[email], ...x.sort()]);
}

const mergeAccounts = (accounts: string[][]): string[][] => {
  const parents: any = {};
  const emailToName: any = {};

  const find = (x:string) => {
    if (x !== parents[x]) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }

  const union = (x:string, y:string) => {
    parents[find(x)] = find(y);
  }

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) parents[email] = email;
      emailToName[email] = name;
      union(email, emails[0]);
    }
  }

  const emails: any = {};
  for (const email in parents) {
    const parent = find(email);
    if (!emails[parent]) emails[parent] = [];
    emails[parent].push(email);
  }

  const result: string[][] = [];
  for (let email in emails) {
    let name = emailToName[email];
    result.push([name, ...emails[email].sort()]);
  }


  return result;
}

export default (): void => {
  console.log(mergeAccounts([
    ["John","johnsmith@mail.com","john_newyork@mail.com","johnextras@mail.com"],
    ["John","john00@mail.com","johnsmith@mail.com"],
    ["Mary","mary@mail.com"],
    ["John","johnnybravo@mail.com"]
  ]));
  // console.log(mergeAccounts([
  //   ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],
  //   ["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],
  //   ["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],
  //   ["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],
  //   ["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]
  // ]));
};
