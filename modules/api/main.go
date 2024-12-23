package main

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/router"
)

func main() {
	r := router.Setup().CompanyRoute().JobRoute()
	r.R.Run()
}
