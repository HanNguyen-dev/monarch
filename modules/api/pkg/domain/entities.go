package domain

import "time"

type IndustryEntity struct {
	IndustryId uint   `json:"industryId"`
	Name       string `json:"name"`
}

func (ie *IndustryEntity) TableName() string {
	return "industry"
}

type CompanyEntity struct {
	CompanyId   uint
	Name        string
	Headquarter string
	Url         string
	IndustryId  string
	Industry    IndustryEntity `gorm:"references:IndustryId"`
}

func (ce *CompanyEntity) TableName() string {
	return "company"
}

type JobEntity struct {
	JobId         uint
	Title         string
	Frontend      string
	Backend       string
	StoreDb       string
	Cloud         string
	Languages     string
	Experience    string
	AppliedDate   time.Time
	CompletedDate time.Time
	Status        string
	CompanyId     string
	Company       CompanyEntity `gorm:"references:CompanyId"`
	Url           string
}

func (je *JobEntity) TableName() string {
	return "job"
}
