package router

import (
	"net/http"

	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
	"github.com/HanNguyen-dev/monarch/api/pkg/service"
	"github.com/gin-gonic/gin"
)

var (
	db                                    = make(map[string]string)
	companyService domain.ICompanyService = service.NewCompanyService()
	jobService     domain.IJobService     = service.NewJobService()
)

type router struct {
	R *gin.Engine
}

func Setup() *router {
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, "pong")
	})

	// Get user value
	r.GET("/user/:name", func(c *gin.Context) {
		user := c.Params.ByName("name")
		value, ok := db[user]
		if ok {
			c.JSON(http.StatusOK, gin.H{"user": user, "value": value})
		} else {
			c.JSON(http.StatusOK, gin.H{"user": user, "status": "no value"})
		}
	})

	return &router{R: r}
}
