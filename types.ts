
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface StrategyRequest {
  businessType: string;
  goal: string;
}
