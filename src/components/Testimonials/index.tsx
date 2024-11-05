import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type TestimonialItem = {
  title: string;
  description: JSX.Element;
};

const TestimonialList: TestimonialItem[] = [
  {
    title: 'I lost 40 pounds since I started using Cabbage.',
    description: (
      <>
        John, Dubai
      </>
    ),
  },
  {
    title: 'Someone told me Marilyn Manson likes Cabbage because it is intuitively easy to use.',
    description: (
      <>
        Gleb, St.Petersburg
      </>
    ),
  },
  {
    title: 'My music used to make children cry. But since using Cabbage the children laugh and dance with joy.',
    description: (
      <>
        Julia, Montreal
      </>
    ),
  },
  {
    title: "We couldn't throw ninja stars until we started using Cabbage.",
    description: (
      <>
        Donatello, Leonardo, Raphael, and Michelangelo, NYC
      </>
    ),
  },
  {
    title: "Before Cabbage I was single, broke, and had to beg for food. Now I live in Beverly Hills, I drive a red Lamborghini, and all of my children are members of MENSA!",
    description: (
      <>
        Sarah, California
      </>
    ),
  },
  {
    title: "Our laboratory tests have shown that Cabbage provides all the nutrition a growing musician needs.",
    description: (
      <>
        Dr. Klaus Fälschen, Munich
      </>
    ),
  }
]

function Testimonial({ title, description }: TestimonialItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md" style={{ padding: '20px' }}>
        <Heading as="h3" style={{ color: 'rgb(100, 100, 100)', fontStyle: 'italic', fontWeight: 'normal' }}>
          <i className="fas fa-quote-left" style={{ marginRight: '8px', color: '#93d200' }}></i>
          {title}
          <i className="fas fa-quote-right" style={{ marginLeft: '8px', color: '#93d200' }}></i>
        </Heading>
        <div className={styles.shortLine}></div>
        <p style={{ color: 'rgb(20, 20, 20)' }}>{description}</p>
      </div>
    </div>
  );
}

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="text--center">
          <div className={styles.headingWrapper}>
            <div className={styles.line}></div> {/* Left line */}
            <h2 className={styles.headingText}>T E S T I M O N I A L S</h2> {/* Heading text */}
            <div className={styles.line}></div> {/* Right line */}
          </div>
        </div>
        <div className="row">
          {TestimonialList.map((props, idx) => (
            <Testimonial key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
