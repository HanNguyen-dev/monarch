package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type JobService struct {
	tableName string
	repo      *dataaccess.Repo
}

func (js *JobService) GetJobsV1() ([]domain.Job, error) {
	var jobs []domain.Job
	err := js.repo.Db.Table(js.tableName).Find(&jobs).Error
	return jobs, err
}

func (js *JobService) GetJobs() ([]domain.Job, error) {
	var jobs []domain.JobEntity
	err := js.repo.Db.Model(&domain.JobEntity{}).Preload("Company").Find(&jobs).Error

	if err != nil {
		return nil, err
	}

	var results []domain.Job

	for _, job := range jobs {
		results = append(results, mapJob(job))
	}

	return results, err
}

func mapJob(je domain.JobEntity) domain.Job {
	return domain.Job{
		JobId:         je.JobId,
		Title:         je.Title,
		Frontend:      je.Frontend,
		Backend:       je.Backend,
		StoreDb:       je.StoreDb,
		Cloud:         je.Cloud,
		Languages:     je.Languages,
		Experience:    je.Experience,
		AppliedDate:   je.AppliedDate,
		CompletedDate: je.CompletedDate,
		Status:        je.Status,
		CompanyName:   je.Company.Name,
		Url:           je.Url,
	}
}

func NewJobService() *JobService {
	return &JobService{
		tableName: "job",
		repo:      dataaccess.GetInstance(),
	}
}
