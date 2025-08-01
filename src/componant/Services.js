import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web apps.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile applications.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Consulting',
    description: 'Expert advice for your digital strategy.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  }
];

const reviews = [
  {
    name: 'Matthew Piamonte',
    date: '2022-08',
    text: 'Absolutely recommend this company. Heartwood is professional, competitive in their rates and the work is the best. Thanks Heartwood!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Rebecca Christensen-Dickens',
    date: '2023-04-18',
    text: 'Matt is a certified arborist, insured, and was very professional, reliable, affordable, and did a fantastic job, offering suggestions and managing several required tree trims on my property.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Sola Havana',
    date: '2022-06',
    text: 'We had huge trees that were close to neighbouring buildings. Matt did an incredible job of taking them down and removed all debris, even cleaning up with his blower. He went beyond his ...',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
  }
];

const Services = () => (
  <section className="services-section">
    <h2 className="services-title">Our Services</h2>
    <div className="services-list">
      {services.map((service, idx) => (
        <div key={idx} className="service-card">
          <img
            src={service.img}
            alt={service.title}
            className="service-img"
          />
          <h3 className="service-heading">{service.title}</h3>
          <p className="service-desc">{service.description}</p>
        </div>
      ))}
    </div>

    <section className="reviews-section">
      <h2 className="reviews-title">REVIEWS</h2>
      <div className="reviews-list">
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div>
                <div className="review-name">{review.name}</div>
                <div className="review-date">{review.date}</div>
              </div>
            </div>
            <div className="review-rating">
              {'★'.repeat(review.rating)}
            </div>
            <div className="review-text">{review.text}</div>
          </div>
        ))}
      </div>
    </section>
  </section>
);

export default Services;
