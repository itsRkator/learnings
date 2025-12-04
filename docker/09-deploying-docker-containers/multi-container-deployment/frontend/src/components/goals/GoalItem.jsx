import './GoalItem.css';

const GoalItem = (props) => {
  return (
    <li className="goal-item" onClick={props.onDelete.bind(null, props.id)}>
      {props.text}
    </li>
  );
};

export default GoalItem;
