import {FormValue, FormRule, FormErrors} from './form'
import {isEmpty} from '../helpers/utils'

type FormRules = Array<FormRule>

const getValidResult = (rule: FormRule, value: any): boolean => {
    if (rule.pattern) {
        return rule.pattern.test(value)
    }

    return !(rule.required && isEmpty(value))
        && !(rule.minLength && value.length < rule.minLength)
        && !(rule.maxLength && value.length > rule.maxLength)
};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: FormErrors = {};
    rules.map(rule => {
        if (!getValidResult(rule, formValue[rule.key])) {
            errors[rule.key] ? errors[rule.key].push(rule.message) : errors[rule.key] = [rule.message]
        }
    });
    return errors
};

export default Validator
