import React, {useEffect, useRef} from "react";
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

const Modal = ({children, onClose}: {children: React.ReactNode, onClose: () => void}) => {
    const el = useRef(document.createElement('div'))

    useEffect(() => {
        modalRoot?.appendChild(el.current);
        el.current.addEventListener('click', onClose)

        return () => {
            modalRoot?.removeChild(el.current);
        }
    }, [])

        return <section>
            {ReactDOM.createPortal(
                <div onClick={e => e.nativeEvent.stopImmediatePropagation()}>
                    {children}
                </div>,

                el.current
            )}
        </section>
}

export default Modal