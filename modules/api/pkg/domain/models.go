package domain

import "time"

type BaseCompany struct {
	CompanyId   uint   `json:"companyId"`
	Name        string `json:"name"`
	Headquarter string `json:"headquarter"`
	Url         string `json:"url"`
}

type CompanyRequest struct {
	BaseCompany
	IndustryId uint `json:"industryId"`
}

type Company struct {
	BaseCompany
	Industry string `json:"industry"`
}

type Job struct {
	JobId         uint      `json:"jobId"`
	Title         string    `json:"title"`
	Frontend      string    `json:"frontend"`
	Backend       string    `json:"backend"`
	StoreDb       string    `json:"storeDb"`
	Cloud         string    `json:"cloud"`
	Languages     string    `json:"languages"`
	Experience    string    `json:"experience"`
	AppliedDate   time.Time `json:"appliedDate"`
	CompletedDate time.Time `json:"completedDate"`
	Status        string    `json:"status"`
	CompanyName   string    `json:"companyName"`
	Url           string    `json:"url"`
}

type Scientist struct {
	ScientistId string `json:"scientistId"`
	Name        string `json:"name"`
	BirthYear   int    `json:"birthYear"`
	Gender      string `json:"gender"`
}
