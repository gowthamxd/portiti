export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Creative Project ${i + 1}`,
  category: ['Design', 'Photography', 'Art', 'Digital'][i % 4],
  image: `https://picsum.photos/seed/${i + 125}/800/800`,
}));
