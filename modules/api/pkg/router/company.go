package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (router *router) CompanyRoute() *router {
	router.R.GET("/companies", func(c *gin.Context) {
		companies, err := companyService.GetCompanies()

		if err == nil {
			c.JSON(http.StatusOK, gin.H{"companies": companies})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
		}
	})
	return router
}
