const listOpenAccounts = (credentials, user, callback) => {
  authorize(credentials, (err) => {
    if (err) {
      console.log("Authorization failure", err);
      return callback(err);
    }

    return fetchOpenAccounts(user, callback);
  });
};

const fetchOpenAccounts = (user, callback) => {
  dbClient.getAccountsFor(user, (err, accounts) => {
    if (err) {
      console.log("Error while fetching user accounts from database", err);
      return callback(err);
    }

    return callback(
      null,
      accounts.filter((account) => account.isOpen())
    );
  });
};
