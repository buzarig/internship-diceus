import { useEffect, useId, useRef, useState } from 'react';
import styles from './Popover.module.css';

export default function Popover({
    isOpen,
    anchorRef,
    onClose,
    children,
    placement = 'bottom-end',
    offset = 8,
}) {
    const id = useId();
    const panelRef = useRef(null);
    const [posStyle, setPosStyle] = useState(null);

    // закрытие по Escape + клик вне
    useEffect(() => {
        if (!isOpen) return;

        function onKeyDown(e) {
            if (e.key === 'Escape') onClose?.();
        }

        function onPointerDown(e) {
            const panel = panelRef.current;
            const anchor = anchorRef?.current;

            if (!panel || !anchor) return;

            const target = e.target;
            const insidePanel = panel.contains(target);
            const onAnchor = anchor.contains(target);

            if (!insidePanel && !onAnchor) onClose?.();
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onPointerDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onPointerDown);
        };
    }, [isOpen, onClose, anchorRef]);

    // позиционирование (ТОЛЬКО вне render)
    useEffect(() => {
        if (!isOpen) return;

        function updatePosition() {
            const anchor = anchorRef?.current;
            if (!anchor) return;

            const rect = anchor.getBoundingClientRect();
            setPosStyle(computePosition(rect, placement, offset));
        }

        updatePosition();

        // обновляем на скролле/ресайзе
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true); // true — ловим скроллы вложенных контейнеров

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isOpen, anchorRef, placement, offset]);

    if (!isOpen) return null;

    return (
        <div className={styles.portalLayer} aria-hidden={!isOpen}>
            <div
                id={id}
                ref={panelRef}
                className={styles.popover}
                style={posStyle ?? undefined}
                role="menu"
            >
                {children}
            </div>
        </div>
    );
}

function computePosition(rect, placement, offset) {
    const style = { position: 'fixed' };

    const bottom = rect.bottom + offset;
    const top = rect.top - offset;
    const left = rect.left;
    const right = rect.right;

    if (placement === 'bottom-end') {
        style.top = `${bottom}px`;
        style.left = `${right}px`;
        style.transform = 'translateX(-100%)';
        return style;
    }

    if (placement === 'bottom-start') {
        style.top = `${bottom}px`;
        style.left = `${left}px`;
        return style;
    }

    if (placement === 'top-end') {
        style.top = `${top}px`;
        style.left = `${right}px`;
        style.transform = 'translate(-100%, -100%)';
        return style;
    }

    style.top = `${bottom}px`;
    style.left = `${right}px`;
    style.transform = 'translateX(-100%)';
    return style;
}
