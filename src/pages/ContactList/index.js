import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import ContactItem from '../../components/ContactItem';
import './index.css';
import {Link} from 'react-router-dom';

function ContactList({ list, fields }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const keys = fields
    .filter(field => field.display)
    .map(field => field.name);

  const titles = list
    .map(contact => keys.map(key => contact[key]).join(' '));

  return (
    <>
      <Link to="/contacts/add">Добавить контакт</Link>

      <div className="contact-list-container">
        {titles.map(title => (
          <ContactItem key={title} title={title} onDelete={handleOpen} />
        ))}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вы уверены что хотите удалить контакт?</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
          <Button onClick={handleClose} color="secondary">
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
});

export default connect(mapStateToProps)(ContactList);
