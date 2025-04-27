package dataaccess

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

const (
	host   = "127.0.0.1"
	dbname = "sciencedb"
)

type SqlDB struct {
	Db *sql.DB
}

var sqlDB *SqlDB

func GetDBInstance() *SqlDB {
	if sqlDB == nil {
		psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, dbport, dbuser, dbpassword, dbname)
		db, err := sql.Open("postgres", psqlInfo)

		if err != nil {
			panic(err)
		}
		// defer db.Close()

		err = db.Ping()

		if err != nil {
			panic(err)
		}

		sqlDB = &SqlDB{Db: db}
	}
	return sqlDB
}
