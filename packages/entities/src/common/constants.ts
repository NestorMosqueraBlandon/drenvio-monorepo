export enum StatusType {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
}

export interface Params {
    page?: number;
    limit?: number;
    search?: string;
    
}

export interface Query {
    status: StatusType;
    name?: { $regex: string; $options: string };
}
