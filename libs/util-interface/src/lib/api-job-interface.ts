export interface Data {
  jobs: Job[];
  meta: Meta;
}

export interface Attributes {
  title: string;
}

export interface Skill {
  id: string;
}

export interface Relationships {
  skills: Skill[];
}

export interface Job {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Meta {
  next: number;
  count: number;
}
