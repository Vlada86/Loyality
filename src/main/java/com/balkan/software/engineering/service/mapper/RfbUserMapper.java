package com.balkan.software.engineering.service.mapper;

import com.balkan.software.engineering.domain.*;
import com.balkan.software.engineering.service.dto.RfbUserDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link RfbUser} and its DTO {@link RfbUserDTO}.
 */
@Mapper(componentModel = "spring", uses = {RfbLocationMapper.class})
public interface RfbUserMapper extends EntityMapper<RfbUserDTO, RfbUser> {

    @Mapping(source = "homeLocation.id", target = "homeLocationId")
    RfbUserDTO toDto(RfbUser rfbUser);

    @Mapping(source = "homeLocationId", target = "homeLocation")
    RfbUser toEntity(RfbUserDTO rfbUserDTO);

    default RfbUser fromId(Long id) {
        if (id == null) {
            return null;
        }
        RfbUser rfbUser = new RfbUser();
        rfbUser.setId(id);
        return rfbUser;
    }
}
