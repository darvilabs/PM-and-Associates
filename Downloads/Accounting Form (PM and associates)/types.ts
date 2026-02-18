
export interface Service {
  id: string;
  title: string;
  description: string;
  scope: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Values {
  title: string;
  description: string;
}
