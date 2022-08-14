import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { faExclamationTriangle } from "@fortawesome/fontawesome-free-solid";

export const MessageModal = (props) => {
	return (
		<Modal
			show={props.show}
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header className='text-center' closeButton>
				<Modal.Title className='text-center' id='contained-modal-title-vcenter'>
					Error Description
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='text-center'>
					<h4>
						<FontAwesomeIcon
							style={{ color: "red", fontSize: "2em" }}
							icon={faExclamationTriangle}
							size='lg'></FontAwesomeIcon>
					</h4>

					<p className='mt-3 '>{props.message} !</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button className='w-100' variant='danger' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
