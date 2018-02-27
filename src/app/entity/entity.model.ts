

export interface Entity {
	_id:  string
	name:  string
	type:  string
	location:  string
	owner:  string
	variables:  Param[]
	readers:  string[]
	writers:  string[]
	createdAt:  Date
	modifiedAt:  Date
	createdBy:  string
	modifiedBy:  string
}

export interface Param {
 //@TOD flesh out
}
