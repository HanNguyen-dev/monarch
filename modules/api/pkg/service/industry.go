package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type IndustryService struct {
	repo *dataaccess.Repo
}

func (is *IndustryService) GetIndustries() ([]domain.IndustryEntity, error) {
	var industry []domain.IndustryEntity
	err := is.repo.Db.Model(&domain.IndustryEntity{}).Find(&industry).Error
	return industry, err
}

func NewIndustryService() *IndustryService {
	return &IndustryService{
		repo: dataaccess.GetInstance(),
	}
}
