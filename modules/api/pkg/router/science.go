package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (router *router) ScienceRoute() *router {
	router.R.GET("/scientists", func(c *gin.Context) {
		scientists, err := scienceService.GetScientists()

		if err == nil {
			c.JSON(http.StatusOK, gin.H{"scientists": scientists})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
		}
	})
	return router
}
