package service

import (
	"strconv"

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
		results = append(results, mapToCompany(company))
	}

	return results, err
}

func (cs *CompanyService) AddCompany(c domain.CompanyRequest) (string, error) {
	company := mapToCompanyEntity(c)

	result := cs.repo.Db.Create(&company)
	if result.Error != nil {
		return "", result.Error
	}
	return strconv.Itoa(int(company.CompanyId)), nil
}

func mapToCompanyEntity(c domain.CompanyRequest) domain.CompanyEntity {
	return domain.CompanyEntity{
		Name:        c.Name,
		Headquarter: c.Headquarter,
		Url:         c.Url,
		IndustryId:  c.IndustryId,
	}
}

func mapToCompany(ce domain.CompanyEntity) domain.Company {
	return domain.Company{
		BaseCompany: domain.BaseCompany{CompanyId: ce.CompanyId, Name: ce.Name, Headquarter: ce.Headquarter, Url: ce.Url},
		Industry:    ce.Industry.Name,
	}
}

func NewCompanyService() *CompanyService {
	return &CompanyService{
		repo: dataaccess.GetInstance(),
	}
}
