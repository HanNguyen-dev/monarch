package domain

type ICompanyService interface {
	GetCompanies() ([]Company, error)
}

type IJobService interface {
	GetJobs() ([]Job, error)
}

type IIndustryService interface {
	GetIndustries() ([]IndustryEntity, error)
}
