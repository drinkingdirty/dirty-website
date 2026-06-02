export interface Testimonial {
  id: string
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: "I found Dirty at the Thursday market and now I get it every week. The Classic is my favorite drink in SLO.",
    name: 'Larissa V.',
    detail: 'Cal Poly Student',
  },
  {
    id: 't2',
    quote: "We booked Dirty for our chapter event and it was hands down the highlight of the night. Everyone was obsessed. The setup was so cute and the drinks were incredible.",
    name: 'Macey G.',
    detail: 'Alpha Chi Omega Sorority Event, SLO',
  },
  {
    id: 't3',
    quote: "Drove past their pop-up at SLO Ranch and turned around immediately. The Pink Wave is all i think about tbh.",
    name: 'Audrey V.',
    detail: 'SLO Ranch Pop-Up',
  },
  {
    id: 't4',
    quote: "Dirty is the move every Thursday. My friends and I go after class and it never disappoints. The seasonal drinks are always a surprise worth waiting for.",
    name: 'Sydney B.',
    detail: 'Thursday Market Regular',
  },
]
