package router

import (
	"net/http"

	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
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

	router.R.POST("/companies", func(c *gin.Context) {
		var requestBody domain.CompanyRequest
		if err := c.BindJSON(&requestBody); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
		} else {
			if companyId, err := companyService.AddCompany(requestBody); err == nil {
				c.JSON(http.StatusOK, gin.H{"companyID": companyId})
			} else {
				c.JSON(http.StatusInternalServerError, gin.H{"errorMessage": err.Error()})
			}
		}
	})
	return router
}
