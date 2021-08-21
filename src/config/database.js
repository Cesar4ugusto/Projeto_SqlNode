module.exports = {
    dialect: process.env.DIALECT_kEY,
    host: process.env.HOST_kEY,
    username: process.env.USERNAME_kEY,
    password: process.env.PASSWORD_kEY,
    database: process.env.DATABASE_kEY,
    define: {
        timestamps: true,
        underscored: true,
    }
}
