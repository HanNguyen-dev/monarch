package domain

type ICompanyService interface {
	GetCompanies() ([]Company, error)
	AddCompany(company CompanyRequest) (string, error)
}

type IJobService interface {
	GetJobs() ([]Job, error)
}

type IIndustryService interface {
	GetIndustries() ([]IndustryEntity, error)
}

type IScienceService interface {
	GetScientists() ([]Scientist, error)
}
