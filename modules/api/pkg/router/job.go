package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (router *router) JobRoute() *router {
	router.R.GET("/jobs", func(c *gin.Context) {
		jobs, err := jobService.GetJobs()

		if err == nil {
			c.JSON(http.StatusOK, gin.H{"jobs": jobs})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
		}

	})
	return router
}
