import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../forms/Form';
import { clearForm } from '../../redux/actions/form';
import popup from '../../redux/reducers/popup';
import EventForm from '../forms/EventForm';

const Popup = ({ popup, clearForm }) => {
	const handleFormShow = () => {
		const { name } = popup;
		if (name === 'event-info') return <EventForm />;
	};

	return (
		<div className={`popup popup__${popup.name}`} id={popup.name}>
			<div className={`popup__content ${popup.name}`}>
				<div className='popup__header'>
					<a href='#' className='popup__close' onClick={() => clearForm()}>
						&times;
					</a>
					<h3 className='popup__header--text'>{popup.headerValue}</h3>
				</div>
				{handleFormShow()}
				{/* {formName && <Form />} */}
			</div>
		</div>
	);
};

Popup.propTypes = {
	clearForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	popup: state.popup,
});

export default connect(mapStateToProps, { clearForm })(Popup);
