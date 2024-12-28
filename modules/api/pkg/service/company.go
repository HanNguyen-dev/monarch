package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type CompanyService struct {
	repo *dataaccess.Repo
}

func (cs *CompanyService) GetCompanies() ([]domain.Company, error) {
	var companies []domain.CompanyEntity
	err := cs.repo.Db.Model(&domain.CompanyEntity{}).Preload("Industry").Find(&companies).Error

	if err != nil {
		return nil, err
	}

	var results []domain.Company

	for _, company := range companies {
		results = append(results, mapCompany(company))
	}

	return results, err
}

func mapCompany(ce domain.CompanyEntity) domain.Company {
	return domain.Company{
		CompanyId:   ce.CompanyId,
		Name:        ce.Name,
		Headquarter: ce.Headquarter,
		Industry:    ce.Industry.Name,
	}
}

func NewCompanyService() *CompanyService {
	return &CompanyService{
		repo: dataaccess.GetInstance(),
	}
}
