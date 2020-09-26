import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, ErrorTooltip } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, registerField } = useField(name);

  const hanbleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const hanbleInputBlur = useCallback(() => {
    setIsFocused(false);

    const hasValue = !!inputRef.current?.value;
    setIsFilled(hasValue);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={hanbleInputFocus}
        onBlur={hanbleInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle color="#c53030" />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;
