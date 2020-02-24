/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }

// 会将template ast树 =》 codegen => 转化成render函数 =》 内部调用的是_c方法 =》 虚拟dom

// template => 虚拟dom 