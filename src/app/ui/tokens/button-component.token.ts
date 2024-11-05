import { InjectionToken, Type } from '@angular/core';
import {ButtonBase} from '../models/button-base';

export const BUTTON_COMPONENT = new InjectionToken<Type<ButtonBase>>('ButtonComponent');
