const NAV_Links = [
  'home',
  'about',
  'works',
  'skills',
  'testimonials',
  'contact',
];

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {NAV_Links.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavDots;
