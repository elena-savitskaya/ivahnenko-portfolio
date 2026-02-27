export interface Project {
  title: string;
  image: string;
  category: string;
}

export interface Categories {
  id: string;
  icon: string;
  title: string;
  description: string;
  previewImage: string;
}

export interface Process {
  title: string;
  items: string[];
}
