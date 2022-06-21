exports.get_db_url = () => {
  const { DB_CONNECTION } = process.env;

  if (DB_CONNECTION === 'sqlite') {
    return (
      {
        dialect: 'sqlite',
        storage: 'database.sqlite',
      } || 'sqlite::memory:'
    );
  }
};
