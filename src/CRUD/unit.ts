import { getRepository } from "typeorm";
import { HandelStatus } from "../controllers/HandelSuccess";
import { unitConfig, Unit } from "../entity/Unit";

export const Create = async (unitConfig: unitConfig) => {
  let UnitRepo = getRepository(Unit);
  if (!unitConfig.name || !unitConfig.index) {
    return HandelStatus(204);
  }
  var unit = new Unit();
  unit.index = unitConfig.index;
  unit.name = unitConfig.name;
  unit.subject = unitConfig.subject || null;
  unit.description = unitConfig.description || null;
  await UnitRepo.save(unit);
  var idU = unit.id;
  return HandelStatus(200, null, { id: idU });
};
export const GetAll = async () => {
  let UnitRepo = getRepository(Unit);
  let units = await UnitRepo.find();
  return HandelStatus(200, null, units);
};
export const GetById = async (id) => {
  let UnitRepo = getRepository(Unit);
  let unit = await UnitRepo.findOne({ id: id });
  if (!unit) {
    return HandelStatus(404);
  }
  return HandelStatus(200, null, unit);
};
export const removeById = async (id) => {
  let UnitRepo = getRepository(Unit);
  let unit = await UnitRepo.findOne({ id: id });
  if (!unit) {
    return HandelStatus(404);
  }
  await UnitRepo.remove(unit);
  return HandelStatus(200, null, unit);
};
export const update = async (unitConfig: unitConfig) => {
  let UnitRepo = getRepository(Unit);
  if (!unitConfig.id) {
    return HandelStatus(204);
  }
  var id = unitConfig.id;
  let unit = await UnitRepo.findOne({ id: id });
  if (!unit) {
    return HandelStatus(404);
  }
  unit.name = unitConfig.name || unit.name;
  unit.index = unitConfig.index || unit.index;
  unit.subject = unitConfig.subject || unit.subject;
  await UnitRepo.update(id, unit);
  return HandelStatus(200, null, unit);
};

export const getUnitAndWordOfUnit = async (id) => {
  let UnitRepo = getRepository(Unit);
  var unit = await UnitRepo.findOne({ index: id });
  if (!unit) {
    return HandelStatus(404);
  }
  var unitRes = await UnitRepo.createQueryBuilder("unit")
    .leftJoinAndSelect("unit.words", "word")
    .where("unit.id = :id", { id: id })
    .getOne();
  return HandelStatus(200, null, unitRes);
};
