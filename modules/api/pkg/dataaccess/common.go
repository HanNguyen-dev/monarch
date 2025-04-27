package dataaccess

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const dbport = 5432

var (
	dbhost     = os.Getenv("dbhost")
	dbuser     = os.Getenv("dbuser")
	dbpassword = os.Getenv("dbpassword")
	dsn        = fmt.Sprintf(
		"host=%s user=%s password=%s dbname=jobs port=%d sslmode=disable TimeZone=US/Eastern",
		dbhost,
		dbuser,
		dbpassword,
		dbport,
	)
)

type Repo struct {
	Db *gorm.DB
}

var repo *Repo

func GetInstance() *Repo {
	if repo == nil {
		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

		if err != nil {
			panic(err)
		}

		repo = &Repo{Db: db}
	}
	return repo
}
