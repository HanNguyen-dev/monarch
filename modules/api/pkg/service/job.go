package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type JobService struct {
	tableName string
	repo      *dataaccess.Repo
}

func (js *JobService) GetJobs() []domain.Job {
	var jobs []domain.Job
	js.repo.Db.Table(js.tableName)
	return jobs
}

func NewJobService() *JobService {
	return &JobService{
		tableName: "job",
		repo:      dataaccess.GetInstance(),
	}
}
