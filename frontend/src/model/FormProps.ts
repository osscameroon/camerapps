import {FieldElement, FieldName, FieldValues, Ref} from "react-hook-form/dist/types/fields";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {
    OmitResetState,
    SetFieldValue,
    SetValueConfig,
    SubmitHandler,
    UnpackNestedValue
} from "react-hook-form/dist/types/form";
import {ErrorOption, FieldErrors} from "react-hook-form/dist/types/errors";
import {DeepPartial} from "react-hook-form/dist/types/utils";

export interface FormProps <TFieldValues extends FieldValues = FieldValues> {
    register<TFieldElement extends FieldElement<TFieldValues>>(ref: (TFieldElement & Ref) | null, rules?: RegisterOptions): void;
    handleSubmit: <TSubmitFieldValues extends FieldValues = TFieldValues>(onValid: SubmitHandler<TSubmitFieldValues>, onInvalid?: any) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors?: FieldErrors;
    control?: any;
    reset: (values?: UnpackNestedValue<DeepPartial<TFieldValues>>, omitResetState?: OmitResetState) => void,
    setValue(name: FieldName<TFieldValues>, value: SetFieldValue<TFieldValues>, config?: SetValueConfig): void;
    setError(name: FieldName<TFieldValues>, error: ErrorOption): void;
}
