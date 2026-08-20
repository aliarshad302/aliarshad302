const reviews = [
  {
    initials: "MR",
    name: "Michael R.",
    location: "Los Angeles, CA",
    source: "Google Review",
    text: "Our power went out late at night and ielectrician had a tech at our door within an hour. He found the issue, fixed it quickly, and explained everything in simple terms. Great service.",
  },
  {
    initials: "SL",
    name: "Sarah L.",
    location: "Pasadena, CA",
    source: "Yelp Review",
    text: "We used ielectrician for a full panel upgrade and new lighting throughout our home. The crew was on time, very respectful of our space, and the final result looks fantastic.",
  },
  {
    initials: "DP",
    name: "Daniel P.",
    location: "Santa Monica, CA",
    source: "Google Review",
    text: "I had several outlets that kept tripping. The electrician diagnosed the problem quickly, rewired what was needed, and the price was exactly what they quoted on the phone.",
  },
  {
    initials: "JK",
    name: "Jasmine K.",
    location: "Burbank, CA",
    source: "Facebook Review",
    text: "We hired ielectrician to install new recessed lights and a dimmer system. The difference in our living room is incredible. Super clean work and no surprise fees.",
  },
  {
    initials: "RM",
    name: "Roberto M.",
    location: "Inglewood, CA",
    source: "Google Review",
    text: "The technician checked every outlet and breaker after our remodel. He caught a few issues from the previous contractor and fixed them on the spot. I feel much safer now.",
  },
  {
    initials: "ET",
    name: "Emily T.",
    location: "Long Beach, CA",
    source: "Yelp Review",
    text: "Friendly office staff, quick scheduling, and an electrician who actually showed up on time. They installed a new EV charger and walked me through how everything works.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from California homeowners and businesses who trusted
            iElectrician with their electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm font-bold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--navy)]">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {review.location} &middot; {review.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
