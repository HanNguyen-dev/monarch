package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (router *router) IndustryRoute() *router {
	router.R.GET("/industries", func(c *gin.Context) {
		industries, err := industryService.GetIndustries()

		if err == nil {
			c.JSON(http.StatusOK, gin.H{"industries": industries})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
		}
	})
	return router
}
