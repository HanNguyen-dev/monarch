package service

import (
	"github.com/HanNguyen-dev/monarch/api/pkg/dataaccess"
	"github.com/HanNguyen-dev/monarch/api/pkg/domain"
)

type ScienceService struct {
	sqlDB *dataaccess.SqlDB
}

func (ss *ScienceService) GetScientists() ([]domain.Scientist, error) {
	var scientists []domain.Scientist
	rows, err := ss.sqlDB.Db.Query("SELECT * FROM scientists;")

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var scientist domain.Scientist
		if err := rows.Scan(&scientist.ScientistId, &scientist.Name, &scientist.BirthYear, &scientist.Gender); err != nil {
			return nil, err
		}
		scientists = append(scientists, scientist)
	}

	return scientists, nil
}

func NewScienceService() *ScienceService {
	return &ScienceService{
		sqlDB: dataaccess.GetDBInstance(),
	}
}
