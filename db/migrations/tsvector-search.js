const vectorName = '_search';

module.exports = {
    up: (queryInterface) => (
        queryInterface.sequelize.transaction((t) =>
            queryInterface.sequelize.query(`
                ALTER TABLE "Books" ADD COLUMN "_search" TSVECTOR;
            `, { transaction: t })
            .then(() =>
                queryInterface.sequelize.query(`
                    UPDATE "Books" SET _search = to_tsvector('russian', 'title');
                `, { transaction: t })
            ).then(() =>
                queryInterface.sequelize.query(`
                    CREATE INDEX Books_search ON "Books" USING gin(${vectorName});
                `, { transaction: t })
            ).then(() =>
                queryInterface.sequelize.query(`
                    CREATE TRIGGER Books_vector_update
                    BEFORE INSERT OR UPDATE ON "Books"
                    FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(${vectorName}, 'pg_catalog.russian', title);
                `, { transaction: t })
            )
        )
    ),

    down: (queryInterface) => (
        queryInterface.sequelize.transaction((t) => {})
    ),
};