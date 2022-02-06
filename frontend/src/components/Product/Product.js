import classes from './Product.module.css';

const Product = (props) => {
  const color = [classes.dot];

  switch (props.color) {
    case 'Silver':
      color.push(classes.silver);
      break;
    case 'Rose Gold':
      color.push(classes['rose-gold']);
      break;
    default:
      color.push(classes.default);
      break;
  }

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={props.image} alt={props.name} className={classes.image} />
      </div>
      <div className={classes.details}>
        <p>{props.name}</p>
        <span className={color.join(' ')}></span>
        <p>{props.color === 'N/A' ? 'No color available' : props.color}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Product;
