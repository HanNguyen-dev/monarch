package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type CompanyService struct {
	tableName string
	repo      *dataaccess.Repo
}

func (cs *CompanyService) GetCompanies() []domain.Company {
	var companies []domain.Company
	cs.repo.Db.Table(cs.tableName).Find(&companies)
	return companies
}

func NewCompanyService() *CompanyService {
	return &CompanyService{
		tableName: "company",
		repo:      dataaccess.GetInstance(),
	}
}
