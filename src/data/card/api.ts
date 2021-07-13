import { CardDto } from './dto'

import { get } from '../../api/requests'

const BASE_PATH = '/cards'

export const findCardsByBoardId = async (boardId: number): Promise<CardDto[]> =>
  get<CardDto[]>(BASE_PATH, { params: { boardId } })
